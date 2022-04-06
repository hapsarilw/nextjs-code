import { getAllEvents } from '../../dummy-data';
import { Fragment } from 'react/cjs/react.production.min';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';



function AllEventsPage(){
    const events = getAllEvents(); 
    
    return (
        <Fragment>
            <EventSearch/>
            <EventList items={events}/>
        </Fragment>
    );

}

export default AllEventsPage;