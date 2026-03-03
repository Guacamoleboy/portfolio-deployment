export const getCommitColor = (count: number) => {
    switch (true) {
        case count === 0:
            return "rgba(0, 0, 0, 0.1)";
        case count <= 2:
            return "rgb(91, 113, 85)";
        case count <= 4:
            return "rgb(109, 134, 101)";
        case count <= 7:
            return "rgb(117, 144, 108)";
        case count <= 10:
            return "rgb(120, 147, 111)";
        case count <= 30:
            return "rgb(137, 169, 126)";
        case count > 30 && count <= 50:
            return "rgb(255, 191, 0)";   
        case count > 50 && count <= 70:
            return "rgb(255, 149, 0)";   
        case count > 70 && count <= 100:
            return "rgb(235, 125, 0)";  
        case count > 100:
            return "rgb(255, 94, 0)";
        default:
            return "rgba(89, 110, 83)";
    }
};