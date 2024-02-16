console.log(this) // {}

function normalFunction() {
    console.log(this) // global
}

normalFunction()

const fn = () => console.log(this) // {}

fn()

const obj = {
    a : 10,
    b: 30,
    fn : function() {
        console.log(this) // it points to wrapping object
        this.a = 90
    }
}

obj.fn()