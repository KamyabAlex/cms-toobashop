import React from 'react';
import { Link } from '@inertiajs/react';
import { PlusSmallIcon, ArrowLeftIcon } from '@heroicons/react/20/solid';
import AppLayout from '@/Layouts/AppLayout';

export default function Dashboard() {
  const secondaryNavigation: any[] = [];
  const stats = [
    {
      name: 'سفارشات دیده نشده',
      value: '15',
      change: '',
      changeType: 'positive',
      moreInfo: true,
    },
    {
      name: 'کل سفارشات',
      value: '250',
      change: '',
      changeType: 'positive',
      moreInfo: true,
    },
    {
      name: 'دریافتی های امروز',
      value: '3,000,000 تومان',
      change: '',
      changeType: 'positive',
      moreInfo: true,
    },
    {
      name: 'تعداد محصولات',
      value: '250',
      change: '',
      changeType: 'positive',
      moreInfo: true,
    },
  ];
  const people = [
    {
      id: 1,
      name: ' علی بیگی',
      phone: '09114025698',
      date: '1402/05/06 22:30:45',
    },
    {
      id: 2,
      name: ' ارمین عنایتی',
      phone: '09303456895',
      date: '1402/05/06 22:30:45',
    },

    {
      id: 3,
      name: ' مریم تقصی زاده ',
      phone: '0911326265',
      date: '1402/05/06 22:30:45',
    },
    {
      id: 4,
      name: 'امیرحسین نوری ',
      phone: '0911326265',
      date: '1402/05/06 22:30:45',
    },
    {
      id: 5,
      name: 'رقیه توکلی',
      phone: '0911326265',
      date: '1402/05/06 22:30:45',
    },
    // More people...
  ];

  function classNames(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <AppLayout
      title="داشبرد"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          پنل مدیرت - اخرین اطلاعات
        </h2>
      )}
    >
      <main>
        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
              <div className="relative isolate overflow-hidden pt-8">
                {/* Secondary navigation */}
                <header className="pb-4 pt-6 sm:pb-6">
                  <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
                    <h1 className="text-base font-semibold leading-7 text-gray-900">
                      گزارشات
                    </h1>
                    <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
                      {secondaryNavigation?.map(item => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={
                            item.current ? 'text-indigo-600' : 'text-gray-700'
                          }
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <PlusSmallIcon
                        className="-ml-1.5 h-5 w-5"
                        aria-hidden="true"
                      />
                      New invoice
                    </a>
                  </div>
                </header>

                {/* Stats */}
                <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
                  <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
                    {stats.map((stat, statIdx) => (
                      <div
                        key={stat.name}
                        className={classNames(
                          statIdx % 2 === 1
                            ? 'sm:border-l'
                            : statIdx === 2
                            ? 'lg:border-l'
                            : '',
                          'flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8',
                        )}
                      >
                        <dt className="text-sm font-bold leading-6 text-gray-800">
                          {stat.name}
                        </dt>
                        <dd
                          className={classNames(
                            stat.changeType === 'negative'
                              ? 'text-rose-600'
                              : 'text-gray-700',
                            'text-xs font-medium',
                          )}
                        >
                          {stat.change}
                        </dd>
                        <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                          {stat.value}
                        </dd>
                        {stat.moreInfo && (
                          <Link href="#" className="text-indigo-600">
                            مشاهده بیشتر{' '}
                            <ArrowLeftIcon
                              width={20}
                              height={20}
                              className="inline"
                            />
                          </Link>
                        )}
                      </div>
                    ))}
                  </dl>
                </div>

                <div
                  className="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
                  aria-hidden="true"
                >
                  <div
                    className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
                    style={{
                      clipPath:
                        'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="bg-white mt-8 p-6 overflow-hidden shadow-xl sm:rounded-lg">
              <div className="px-4 sm:px-6 lg:px-2">
                <div className="sm:flex sm:items-center">
                  <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">
                      آخرین ثبت نامی
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                      لیست آخرین ثبت نامی ها وب سایت
                    </p>
                  </div>
                  <div className="mt-4 sm:mr-16 sm:mt-0 sm:flex-none">
                    <button
                      type="button"
                      className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      نمایش همه
                    </button>
                  </div>
                </div>
                <div className="mt-8 flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                نام و نام خواندگی
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                              >
                                شماره تماس
                              </th>

                              <th
                                scope="col"
                                className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                              >
                                تاریخ ثبت نام
                              </th>
                              <th
                                scope="col"
                                className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                              >
                                <span className="sr-only">Edit</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {people.map(person => (
                              <tr key={person.id} className="even:bg-gray-50">
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                  {person.name}
                                </td>
                                <td className="whitespace-nowrap text-right px-3 py-4 text-sm text-gray-500">
                                  {person.phone}
                                </td>

                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {person.date}
                                </td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                  <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-900"
                                  >
                                    جزئیات بیشتر
                                    <span className="sr-only">
                                      , {person.name}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
