
export const useJavaScriptUtils = () => {

    const isDate = (date) => {
        return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
    }

    const stringToDate = (date) => {
        var doo = new Date(date);
        return new Date( doo.getTime() - doo.getTimezoneOffset() * -60000 );
    }

    return {
        isDate,
        stringToDate
    }
    
}