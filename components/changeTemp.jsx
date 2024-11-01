const Unit = {
    C: "Cº",
    F: "Fº"
};

function ChangeTemp(unit, temp) {
    const numericTemp = temp;



    if (unit === Unit.C) {
        return (numericTemp * 1.8) + 32;
    } else if (unit === Unit.F) {
        return (numericTemp - 32) / 1.8;
    } else {
        throw new Error("Invalid unit in ChangeTemp");
    }
}

function GetOpositeUnit(unit){
   return  ( unit === Unit.C ? Unit.F : Unit.C );
}

function ChangeConvert(setunit ){

}

export { Unit, ChangeTemp , GetOpositeUnit , ChangeConvert };
