function getRandomFutureDate() {
    const daysToAddOptions = [ 12, 14];
    const randomDays = daysToAddOptions[Math.floor(Math.random() * daysToAddOptions.length)];

    const today = new Date();
    today.setDate(today.getDate() + randomDays);

    // Format the future date
    const formattedDate = today.toLocaleDateString('en-US', {
        // year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return formattedDate;
}

export default getRandomFutureDate;
