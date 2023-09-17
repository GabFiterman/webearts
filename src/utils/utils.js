function scrollTo(position = 0) {
    window.scrollTo({
        top: position,
        behavior: 'smooth',
    });
    document.body.scrollTop = position;
}

export { scrollTo };
