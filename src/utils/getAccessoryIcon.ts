import Speed from '../assets/speed.svg'
import Acceleration from '../assets/acceleration.svg'
import Force from '../assets/force.svg'
import Exchange from '../assets/exchange.svg'
import People from '../assets/people.svg'
import Car from '../assets/car.svg'

import Gasoline from '../assets/gasoline.svg'
import Energy from '../assets/energy.svg'
import Hybrid from '../assets/hybrid.svg'

export function getAccessoryIcon(type: string) {
    switch (type){
        case 'speed':
               return Speed
        case 'acceleration':
                return Acceleration
        case 'turning_diameter':
                return Force
        case 'gasoline_motor':
                return Gasoline
        case 'eletric_motor':
               return Energy
        case 'hybrid_motor':
                return Hybrid
        case 'exchange':
                return Exchange
        case 'seats':
                return People
        default:
            return Car
    }

}