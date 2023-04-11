export const validateLocation = (location: string) => {
    function getPosition(str: string, char: string, index: number) {
        return str.split(char, index).join(char).length;
      }

    //if it includes @ then parse as a Google Street View URL
    if (location.includes('@')) {
        const newLocation = location.slice(location.indexOf('@') + 1, getPosition(location, ',', 2));
        location = newLocation;
    }
    return location;
}