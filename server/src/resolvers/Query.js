async function feed(parent, args, ctx, info) {
    const {filter, first, skip} = args; // destructure input arguments
    const where = filter
        ? {OR: [{url_contains: filter}, {description_contains: filter}]}
        : {};

    const queriedLinks = await ctx.db.query.links({first, skip, where});

    return {
        linkIds: queriedLinks.map(link => link.id),
        count
    };
}
module.exports = {
    feed
};
