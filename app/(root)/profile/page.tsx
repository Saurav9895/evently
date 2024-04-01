import Collection from '@/components/shared/Collections'
import { Button } from '@/components/ui/button'
import { getEventsByUser } from '@/lib/actions/event.actions'
// import { getOrdersByUser } from '@/lib/actions/order.actions'
// import { IOrder } from '@/lib/database/models/order.model'
// import { SearchParamProps } from '@/types'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const ProfilePage = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

//   const ordersPage = Number(searchParams?.ordersPage) || 1;
//   const eventsPage = Number(searchParams?.eventsPage) || 1;

//   const orders = await getOrdersByUser({ userId, page: ordersPage})

//   const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];
  const organizedEvents = await getEventsByUser({ userId, page: 1 })

  return (
    <>
      {/* My Tickets */}
      <section className="bg-bg-pink bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className='h3-bold text-center sm:text-left'>My Booking</h3>
         
        </div>
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <Button asChild size="lg" className="button flex bg-pink hover:bg-light-pink">
            <Link href="/#events">
              Explore More Service
            </Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        {/* <Collection 
          data={orderedEvents}
          emptyTitle="No Service booked  yet"
          emptyStateSubtext="No worries - plenty of services to explore!"
          collectionType="My_Tickets"
          limit={3}
          page={1}
          urlParamName="ordersPage"
          totalPages={2}
        /> */}
      </section>

      {/* Events Organized */}
      <section className="bg-bg-pink bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className='h3-bold text-center sm:text-left'>Service Created</h3>
          
        </div>
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <Button asChild size="lg" className="button flex bg-pink hover:bg-light-pink">
            <Link href="/#events">
            Create New Service
            </Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection 
          data={organizedEvents?.data}
          emptyTitle="No service have been created yet"
          emptyStateSubtext="Go create some now"
          collectionType="Events_Organized"
          limit={6}
          page={1}
          urlParamName="eventsPage"
          totalPages={2}
        />
      </section>
    </>
  )
}

export default ProfilePage