try {
    (function () {
        function getPerfFromLS() { 
            return localStorage.getItem('performance_Sdghj&%');
        }
        function setPerfFromLS(c) { 
            return localStorage.setItem('performance_Sdghj&%', c );
        }
        const isDebug = document.currentScript.getAttribute('debug') !== null;
        const noCache = document.currentScript.getAttribute('no-cache') !== null;
        function log(l = '', v = '') {
            if(isDebug) {
                console.log(l,v)
            }
        }

        function calculate_Store_Perf() {
            log('Hello I am starting');
            const startingTime = new Date().valueOf();
            log('Starting time : ', startingTime);
            let x = 0
            for (let i = 1; i < 10000; i++) {
                x = x*i
            }
            const endingTime = new Date().valueOf();
            log('Ending time : ', startingTime);
            const timeDifference = endingTime - startingTime;
            setPerfFromLS(timeDifference)
            window.performanceIndex = timeDifference;
            log('Time Diff : ', timeDifference);
            return timeDifference;
        }

        if(!getPerfFromLS() || noCache) {
            calculate_Store_Perf()
        } else if (isDebug) {
            log('Cached performanceIndex is : ', getPerfFromLS())
        }
        window.computePerformance = calculate_Store_Perf;
    })();
} catch(e) {
    console.error('There is an error while calculating the performance - ', e)
}