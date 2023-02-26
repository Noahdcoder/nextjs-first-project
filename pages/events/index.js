import SingleEventsPage from '@/src/components/events/events-page';

const EventsPage = ({ data }) => {
    return (
     <SingleEventsPage data={data} />
    )
}

export default EventsPage;

export async function getStaticProps() {
   const { events_categories } = await import('data/data.json')
   return {
    props:{
        data: events_categories
    }
   }
}

