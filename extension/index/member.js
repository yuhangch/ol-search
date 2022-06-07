const MEMBER_INDEX = function () {
    const result = []
    API_INDEX.forEach(item => {
        const members = item.members;
        if (members.length<1) return;
        const className = item.pretty;
        for (let i = 0; i < members.length; i++) {
            const member = members[i];
            result.push({
                name: member.name,
                url : member.url,
                description: member.description ? member.description.replace(/(<([^>]+)>)/gi, ''): "no description",
                className: className,
                type:"member",
                keywords:[member.name,member.url]
            })
        }

    })
    return result;
}()