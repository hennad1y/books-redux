import React, {useEffect} from "react";
import "./toast.css";
import {useDispatch, useSelector} from "react-redux";
import {hideToast} from "../../actions/favorites-books";

const Toast = () => {
    const {showToast} = useSelector(({favoritesBooks}) => ({...favoritesBooks}));
    const dispatch = useDispatch();

    useEffect(() => {
        if (!showToast) return;

        const toast = document.querySelector('.toast');
        const toastWrapper = toast.closest('.toast-wrapper');
        if(toast.className.indexOf('show') > -1) return;

        toast.classList.add('show');
        toastWrapper.style.zIndex = 4;
        setTimeout(() => {
            toast.classList.remove('show');
            toastWrapper.style.zIndex = -1;
            dispatch(hideToast())
        }, 4000);
    });

    return (
        <div className="toast-wrapper" aria-live="polite" aria-atomic="true"
             style={{position: 'relative', minHeight: '200px'}}>
            <div className="toast" style={{position: 'absolute', top: '0', right: '0'}}>
                <div className="toast-body">
                    Maximum favorites!
                </div>
            </div>
        </div>
    )
};

export default Toast;