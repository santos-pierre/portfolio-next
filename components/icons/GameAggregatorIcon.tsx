import { SVGProps } from 'react';

const GameAggregatorIcon = ({ ...rest }: SVGProps<HTMLElement & SVGElement & SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 24 24" {...rest}>
            <title>Video Game Aggregator</title>
            <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
    );
};

export default GameAggregatorIcon;
