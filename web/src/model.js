 import 'whatwg-fetch';

class Slice {
    constructor() {
        this.name = null;
    }
}

class AppState {
    constructor() {
        this.listeners = {
            'onDeliverStarted': [],
            'onDeliverComplete': []
        };
    }

    static toSlice(data) {
        let slice = new Slice();
        slice.name = data.Name;
    }

    getSlices() {
        let request = {
            headers: {
                'Accept': 'application/json'
            }
        }
        let uri = "http://sz1ci00v.dartcontainer.com:8080/sap/opu/odata/sap/Z_PIZZA_SRV/PizzaTypes?$orderby=Name%20desc";
        return fetch(uri, request)
            .then(data => data.json())
            .then(response => response.d.results)
            .then(results => results.map(data => this.toSlice(data)));

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
