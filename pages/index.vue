<template>
    <div>
        <h1>Réservation de terrain de tennis</h1>
        <v-calendar
            ref="calendar"
            v-model="value"
            :weekdays="weekday"
            :type="type"
            :events="events"
            :first-time="'07:00'"
            :interval-count="16"
            :interval-height="34"
            :event-overlap-mode="mode"
            :event-overlap-threshold="30"
            :event-color="getEventColor"
            @mousedown:event="clickEvent"
            @mousedown:time="clickTime"
            @change="getEvents"
        ></v-calendar>
    </div>
</template>

<script>
export default {
    data: () => ({
        type: 'week',
        mode: 'stack',
        modes: ['stack', 'column'],
        weekday: [1, 2, 3, 4, 5, 6, 0],
        value: '',
        events: [],
        colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
        names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }),
    async mounted() {
        const reservations = await this.$axios.$get('getReservations')
        this.events = reservations.map(reservation => ({
            name: `Reservation`,
            color: 'blue',
            start: reservation.timestamp * 1000,
            end: reservation.timestamp * 1000 + 30 * 60 * 1000,
            timed: true,
        }))
    },
    methods: {
        toTime(tms) {
            return new Date(tms.year, tms.month - 1, tms.day, tms.hour, tms.minute).getTime()
        },
        roundTime(time, down = true) {
            const roundTo = 30 // minutes
            const roundDownTime = roundTo * 60 * 1000
            return down ? time - (time % roundDownTime) : time + (roundDownTime - (time % roundDownTime))
        },
        clickEvent({ event, timed }) {
            if (event && timed) {
                this.clickedEvent = event
                this.events.splice(this.events.indexOf(event), 1)
            }
        },
        clickTime(tms) {
            if (this.clickedEvent) {
                this.clickedEvent = null
                return
            }
            const mouse = this.toTime(tms)
            this.createStart = this.roundTime(mouse)
            console.log('chcr', this.createStart)
            this.createEvent = {
                name: `Event #${this.events.length}`,
                color: 'blue',
                start: this.createStart,
                end: this.createStart + 30 * 60 * 1000,
                timed: true,
            }

            this.events.push(this.createEvent)
            this.$axios.$post('addReservation', { data: { timestamp: this.createStart / 1000 } })
        },
        getEvents({ start, end }) {
            this.events = []
        },
        getEventColor(event) {
            return event.color
        },
        rnd(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a
        },
    },
}
</script>
