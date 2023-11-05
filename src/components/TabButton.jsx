export default function TabButton({children,onSelcet,isSelected}){
    
    function handleClick (){
        console.log('Hello world');
    }
    
    return <li><button className={isSelected ? 'active' : undefined } onClick={onSelcet}>{children}</button></li>;
}