const METHOD_INDEX = function () {
    const result = []
    API_INDEX.forEach(item => {
        const methods = item.methods;
        if (methods.length<1) return;
        const className = item.pretty;
        for (let i = 0; i < methods.length; i++) {
            const method = methods[i];
            result.push({
                name: method.name,
                url : method.url,
                description: method.description ? method.description.replace(/(<([^>]+)>)/gi, ''): "no description",
                className: className,
                type:"method",
                keywords:[method.name,method.url]
            })
        }

    })
    return result;
}()