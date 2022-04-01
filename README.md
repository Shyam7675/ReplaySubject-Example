# ReplaySubject Example

# Details of ReplaySubject
1. ReplaySubject is a variant of a Subject which keeps a cache of previous values emitted by a source observable and sends them to all new observers immediately on subscription. This behavior of replaying a sequence of old values to new subscribes is where the name for this type of a subject comes from.

2. ReplaySubject is similar to the BehaviorSubject in the way that it can send cached values to new subscribers, but instead of just one current value, it can record and replay a whole series of values.

3. if you would like to buffer a maximum of 3 values, as long as the values are less than 2 seconds old, you could do so with a new ReplaySubject(3, 2000). In other words, the configuration above means “I want to store the last 3 values, that have been executed in the last 2 seconds prior to a new subscription”.