
export function fromPolarToCartesian(polar) {
    var r = polar[0]
    var theta = polar[1]
    var delta = polar[2]
    return [ r*Math.cos(theta) , r*Math.cos()]
}