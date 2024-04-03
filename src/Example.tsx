'use client'
import clsx from "clsx";
import { useState } from "react";
import custom from './custom.module.scss';

const Example = () => {
    const [expanding, setExpanding] = useState(false);

    return (
        <>
            <div className={clsx('card', {
                [custom.card]: expanding
            })}>
                Card
            </div>
        </>
    );
}

export default Example;