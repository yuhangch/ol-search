const fuse_api = new Fuse(API_INDEX.map(i => {
    delete i.methods;
    delete i.members;
    delete i.events;
    return i;
}), {
    includeMatches: false,
    includeScore: true,
    ignoreLocation: true,
    keys: ['name']
})
const fuse_method = new Fuse(METHOD_INDEX, {
    includeMatches: true,
    includeScore: true,
    ignoreLocation: true,
    keys: ['name','url']
})
const fuse_member = new Fuse(MEMBER_INDEX, {
    includeMatches: true,
    includeScore: true,
    ignoreLocation: true,
    keys: ['name','url']
})
