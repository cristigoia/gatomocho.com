export default {
    dateFormat(dateString) {
        const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
        const date = new Date(dateString);
        let day = date.getDate();
        day = day.toString().length === 1 ? '0' + day : day;

        return `${monthNames[ date.getMonth() ]} ${day}, ${date.getFullYear()}`;
    }
};
