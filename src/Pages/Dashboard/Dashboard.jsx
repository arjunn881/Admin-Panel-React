import style from './home.module.scss';
import Latesthits from '../../component/LatestHits/LatestHits';
import Storageinfo from '../../component/StorageInfo/StorageInfo';
import Performance from '../../component/Performance/Performance';

import { useContext } from 'react';
import AdminContext from '../context/adminContext';



function Home() {

    const admin = useContext(AdminContext)

    const notify = admin.items.dasbhoardPage.notifications.map((item, i) => {
        return (
            <div key={i} className={style.notifyItem}>
                <div className={style.imgContainer}>
                    <img src={item.pic} alt='...' />
                </div>
                <div className={style.txt}>
                    <p>{item.message}</p>
                    <span>{item.time}</span>
                </div>
            </div>
        )
    })

    const orders = admin.items.dasbhoardPage.orders.map((item, i) => {
        let dotColor;
        if (item.status === 'Moving') {
            dotColor = '#00ff00'
        } else if (item.status === 'Pending') {
            dotColor = 'orange'
        } else if (item.status === 'Cancelled') {
            dotColor = 'red'
        } else if (item.status === 'Delivered') {
            dotColor = '#0090ff'
        }

        return (
            <tr key={i} className={style.oList}>
                <td>#{item.orderNo}</td>
                <td>
                    <span className={style.dot} style={{ backgroundColor: dotColor, boxShadow: `0px 0px 5px ${dotColor}` }}>
                    </span>
                    {item.status}
                </td>
                <td>{item.operators}</td>
                <td>{item.location}</td>
                <td>{item.distance} km</td>
                <td>{item.startDate}</td>
                <td>{item.deliveryDate}</td>
            </tr>
        )
    })

    return (
        <main className={style.home}>
            <p className={style.dashTitle}>Welcome back, <span>Admin</span></p>
            <div className={style.container}>
                <div className={style.charts}>
                    <h3>Latest Hits</h3>
                    <Latesthits />
                </div>
                <div className={style.charts}>
                    <h3>Performance</h3>
                    <Performance />
                </div>
                <div className={style.charts}>
                    <h3>Storage Information</h3>
                    <Storageinfo />
                </div>
                <div className={style.charts}>
                    <h3>Notification List</h3>
                    <div className={style.notify}>
                        {notify}
                    </div>
                </div>
            </div>
            <div className={style.order}>
                <h3>Orders List</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>ORDER NO.</th>
                            <th>STATUS</th>
                            <th>OPERATORS</th>
                            <th>LOCATION</th>
                            <th>DISTANCE</th>
                            <th>START DATE</th>
                            <th>EST DELIVERY DUE</th>
                        </tr>
                        {orders}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Home;
