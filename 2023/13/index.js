function calculateTime(deliveries) {
	const HOUR_IN_SECONDS = 3600
	const MINUTE_IN_SECONDS = 60

    function deliveryToSeconds(delivery) {
        const [hours, minutes, seconds] = delivery
            .split(":")
            .map(digits => Number(digits))

        return hours * HOUR_IN_SECONDS + minutes * MINUTE_IN_SECONDS + seconds
    }

    function secondsToDelivery(seconds) {
		const absSeconds = Math.abs(seconds)
		const hours = Math.floor(absSeconds / HOUR_IN_SECONDS)
		let secondsLeft = absSeconds - (hours * HOUR_IN_SECONDS)

		const minutes = Math.floor(secondsLeft / MINUTE_IN_SECONDS)
		secondsLeft -= (minutes * MINUTE_IN_SECONDS)

		const [hourDigits, minuteDigits, secondDigits] =
			[hours, minutes, secondsLeft].map(num => num.toString().padStart(2, '0'))

        return `${seconds > 0 ? "-" : ""}${hourDigits}:${minuteDigits}:${secondDigits}`
    }

    function sum(total, number) {
        return total + number
    }

    const maxTimeInSeconds = deliveryToSeconds("07:00:00")
    const deliveriesInSeconds = deliveries.map(deliveryToSeconds)
    const totalDeliveriesInSeconds = deliveriesInSeconds.reduce(sum, 0)
    const timeLeftInSeconds = maxTimeInSeconds - totalDeliveriesInSeconds
    const timeLeft = secondsToDelivery(timeLeftInSeconds)

    console.log({
		deliveries,
        maxTimeInSeconds,
        deliveriesInSeconds,
        totalDeliveriesInSeconds,
        timeLeftInSeconds,
        timeLeft,
    })

    return timeLeft
}

calculateTime(['02:00:00', '05:00:00', '00:30:00'])
calculateTime(['01:01:01', '09:59:59', '01:01:01'])
