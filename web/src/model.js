class AppState {
    constructor() {
        this.listeners = {
            'onDeliverStarted': [],
            'onDeliverComplete': []
        };
    }

    getSlices() {
        return Promise.resolve([
            {
                name: 'Artichoke',
            },
            {
                name: 'Bacon',
            },
            {
                name: 'Supreme',
            },
            {
                name: 'Cheese',
            },
            {
                name: 'Hawaiian',
            },
            {
                name: 'Margherita',
            },
            {
                name: 'Mushroom',
            },
            {
                name: 'Pepperoni',
            }
        ]);
    }

    onDeliverStarted(func) {
        this.listeners["onDeliverStarted"].push(func);
    }

    onDeliverComplete(func) {
        this.listeners["onDeliverComplete"].push(func);
    }

    deliver(slice) {
        this.listeners["onDeliverStarted"].forEach(method => {
            method();
        });

        let self = this;

        setTimeout(() => {
            let evt = new CustomEvent('Delivered', { detail: slice});
            self.listeners["onDeliverComplete"].forEach(method => {
                method(evt);
            });
        }, 3000);
    }
}

export let model = new AppState();
