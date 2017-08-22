import { groupBy } from 'lodash/collection'
import people from './people'
import './style.scss'
import codeURL from './code.png'
if (model.hot) {
    module.hot.accept()
}

const managerGroups = groupBy(people, 'manager');

const root = document.querySelector('#root');
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`

const routes = {
    dashboard: () => {
        System.import('./dashboard').then((dashboard) => {
            dashboard.draw()
        }).catch((err) => {
            console.log('Chunk loading failde')
        })
    }
}

setTimeout(routes.dashboard, 1000);