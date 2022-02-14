export const wvContainer = {
    offscreen: {
        opacity: 0
    },
    onscreen: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

export const wvItem = {
    offscreen: {
        x: -200,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }
}

export const wvCardRight = {
    offscreen: {
        opacity: 0,
        x: -200
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }
}

export const wvCardLeft = {
    offscreen: {
        opacity: 0,
        x: 200
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
}