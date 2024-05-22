'use client'

import React, { useRef, useEffect, useReducer } from 'react';
import Grid from '../grid/Grid';
import { reducer } from '@/context/reducer/Reducer';
import { Unit, initialState } from '@/context';
import Edificios from '../grid/Edificios';
import Unidad from '../grid/Unidad';

const gridToPixels = (value: number) => `${value * 32}px`;

const Battlefield: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: MouseEvent) => {
        const payload = {
            x: event.clientX,
            y: event.clientY,
        };
        dispatch({ type: 'updateMousePosition', payload });
    };

    const handleUnitClick = (unitId: string) => () => {
        dispatch({ type: 'selectEntity' });
    };

    const moveIfMouseInMargin = React.useCallback(() => {
        if (state.ui.mouse.x == null || state.ui.mouse.y == null || ref.current == null) return;

        const containerWidth = ref.current.offsetWidth;
        const containerHeight = ref.current.offsetHeight;

        const scrollMargin = 50;
        const scrollAmount = 10;

        let leftScroll = ref.current.scrollLeft;
        let topScroll = ref.current.scrollTop;

        if (state.ui.mouse.x > containerWidth - scrollMargin) {
            leftScroll += scrollAmount;
        }

        if (state.ui.mouse.x < scrollMargin) {
            leftScroll -= scrollAmount;
        }

        if (state.ui.mouse.y > containerHeight - scrollMargin) {
            topScroll += scrollAmount;
        }

        if (state.ui.mouse.y < scrollMargin) {
            topScroll -= scrollAmount;
        }

        ref.current.scroll(leftScroll, topScroll);
    }, [state.ui.mouse]);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(moveIfMouseInMargin, 100);
        return () => clearInterval(interval);
    }, [moveIfMouseInMargin]);

    return (
        <div
            className="wrapper overflow-hidden relative w-full h-full"
            ref={ref}
            style={{ width: '100vw', height: '100vh' }}
        >   
            <Unidad rows={1} columns={1} />
            <Edificios rows={2} columns={2}/>
            <Grid rows={20} columns={20} />
            
        </div>
        
    );
};

export default Battlefield;
