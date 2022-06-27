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
            let x = 1
            for (let i = 1; i < 10000; i++) {
                x = x*i*i
            }
            const endingTime = new Date().valueOf();
            log('Ending time : ', startingTime);
            const timeDifference = endingTime - startingTime;
            setPerfFromLS(timeDifference)
            // window.performanceIndex = timeDifference;
            log('Time Diff : ', timeDifference);
            return timeDifference;
        }
        let it1 = 0;
        let it2 = 0;
        let it3 = 0;
        let it4 = 0;
        let it5 = 0;
        let it6 = 0;

        if(!getPerfFromLS() || noCache) {
            it1 = calculate_Store_Perf();
            it2 = calculate_Store_Perf();
            it3 = calculate_Store_Perf();
            it4 = calculate_Store_Perf();
            it5 = calculate_Store_Perf();
            it6 = calculate_Store_Perf();

            window.performanceIndex = (it1 + it2 + it3 + it4 + it5 + it6) / 6

            
        } else if (isDebug) {
            log('Cached performanceIndex is : ', getPerfFromLS())
        }
        window.computePerformance = calculate_Store_Perf;
    })();
} catch(e) {
    console.error('There is an error while calculating the performance - ', e)
}