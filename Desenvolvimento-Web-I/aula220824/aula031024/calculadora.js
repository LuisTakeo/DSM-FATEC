function sumValues(...values)
{
    let i = 0;
    let total = 0;
    while (values[i])
    {
        if (typeof values[i] !== "number" || isNaN(values[i]))
            throw new Error("Not a number");
        total += values[i];
        i++;
    }
    return (total);
}
function subtractValues(...values)
{
    let i = 1;
    let total = values[0];
    while (i < values.length)
    {
        if (typeof values[i] !== "number" || isNaN(values[i]))
            throw new Error("Not a number");
        total -= values[i];
        i++;
    }
    return (total);
}
function multiplyValues(...values)
{
    let i = 0;
    let total = 1;
    while (i < values.length)
    {
        if (typeof values[i] !== "number" || isNaN(values[i]))
            throw new Error("Not a number");
        total = total * values[i];
        i++;
    }
    return (total);
}
function divideValues(...values)
{
    let total = values[0];
    let i = 1;
    while (i < values.length)
    {
        if (typeof values[i] !== "number" || isNaN(values[i]))
            throw new Error("Not a number");
        if (values[i] === 0)
            total = 0;
        else 
            total = total / values[i];
        i++;
    }
    return (total);
}

export {sumValues, subtractValues, multiplyValues, divideValues}