function imgUrls(id) {
    const urls = [
        { name: 'maxresdefault', url: `https://img.youtube.com/vi/${id}/maxresdefault.jpg` },
        { name: 'hqdefault', url: `https://img.youtube.com/vi/${id}/hqdefault.jpg` },
        { name: 'mqdefault', url: `https://img.youtube.com/vi/${id}/mqdefault.jpg` },
        { name: 'sddefault', url: `https://img.youtube.com/vi/${id}/sddefault.jpg` },
        { name: 'default', url: `https://img.youtube.com/vi/${id}/default.jpg` },
    ]
    return urls
}

function channelImgUrls(id) {
    return `https://img.youtube.com/c/${id}/hqdefault.jpg`
}

export default imgUrls