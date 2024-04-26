type operator='multiply' | 'divide'
type result=number|string
const calculator=(a:number,b:number,op:operator):result=>{
    switch(op){
        case 'multiply':
            return a*b
        case 'divide':
            if(b==0)
                return "cannot divide by zero"
            else 
                return a/b
    }
    
}
console.log (calculator(Number(process.argv[2]),Number(process.argv[3]),process.argv[4] as operator))
