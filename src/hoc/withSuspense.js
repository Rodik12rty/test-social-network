// Пока этот HOC не используем нигде
import React from "react";
import Preloader from "../components/Common/Preloader/Preloader";


export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader />} >
            <Component {...props} />
        </React.Suspense>
    };
}
