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
            function do_a_heavy_task(){ 
            const startingTime = new Date().valueOf();
            log('Starting time : ', startingTime);
                let x = 1
                for (let i = 1; i < 10000; i++) {
                    x = x*i*i
                }
                
                log('Ending time : ', startingTime);
                const timeDifference = endingTime - startingTime;
            }
            const repArray = new Array(6);
            let sum = 0
            repArray.forEach(() => {
                sum += do_a_heavy_task();
            })
            const avgPerf = sum / 6;
            let index = 'high';
            if (avgPerf > 11) index = 'low';
            else if (avgPerf > 5) index = 'medium' 
            setPerfFromLS(index)
            window.performanceIndex = index;
            log('Time Diff : ', timeDifference);
            return index;
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