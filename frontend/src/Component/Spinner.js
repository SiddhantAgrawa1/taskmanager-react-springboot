import React from "react";

import { ColorRing } from  'react-loader-spinner'

export default function Spinner() {
    return (
        <>
            <ColorRing
                visible={true}
                height="23"
                width="23"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#000000']}
            />

        </>
    )
}