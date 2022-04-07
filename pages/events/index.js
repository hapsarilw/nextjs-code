import { Fragment } from 'react/cjs/react.production.min';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';

function AllEventsPage(){
    const router = useRouter();    
    const events = getAllEvents();
    
    function findEventHandler(year, month){
        const fullPath = `/events/${year}/${month}/abc`

        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventSearch onSearch={findEventHandler}/>
            <EventList items={events}/>
        </Fragment>
    );

}

export default AllEventsPage;