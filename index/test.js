

    const variant = {
  
        str : 'Привет',
        num : 123,
        flag : true,
        txt: 'true',
 
        define(string) {
            
            return (this)
 
        }
    }
const findTypeof = variant.define.bind(variant)


const defineItem = function (findTypeof) {
    return findTypeof("s",this)
}
console.log(defineItem(findTypeof))