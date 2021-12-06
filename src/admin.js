const adminAnalytics = () => {
    let counter = 0
    let reset = false

    const listener = () => likeAdd++
    document.addEventListener('click', listener)

    return {
        delete() {
            document.removeEventListener('click', listener)
            reset = true
        },
        getClick() {
            if(reset){
                return 'reset count'
            }
            return counter
        }
    }

}