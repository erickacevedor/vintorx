import { useEffect } from 'react';

function useSmoothScroll() {
    useEffect(() => {
        const handleClick = (e) => {
            // Check if the clicked element is an anchor link
            if (e.target.tagName === 'A' && e.target.hash) {
                e.preventDefault();
                const targetId = e.target.hash.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);
}

export default useSmoothScroll;