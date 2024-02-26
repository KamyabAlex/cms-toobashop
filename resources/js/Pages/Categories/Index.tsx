import { useForm, usePage } from '@inertiajs/react';

import React from 'react';
import { CategoryProps, Category } from '@/Types/Category';
import { FlashMessage } from '@/Components';
import AppLayout from '@/Layouts/AppLayout';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import useRoute from '@/Hooks/useRoute';
import PrimaryButton from '@/Components/PrimaryButton';
import { buildOptions } from '../Helper/buildOptions';
import Aside from './Aside';

export default function Categories({ categories }: CategoryProps) {
  const route = useRoute();
  const flash = usePage().props.flash as { message: string };

  const subCategoryForm = useForm({
    category: '',
    subName: '',
    slug: '',
  });

  const categoryForm = useForm({
    name: '',
    slug: '',
  });

  const handleCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    categoryForm.post(route('category.store'), {
      onSuccess: () => {
        categoryForm.reset();
      },
    });
  };
  const handleSubCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();

    subCategoryForm.post(route('subCategory.store'), {
      onSuccess: () => {
        subCategoryForm.reset();
      },
    });
  };
  return (
    <AppLayout
      title="مدیریت دسته بندی ها"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          مدیریت دسته بندی ها
        </h2>
      )}
    >
      <main>
        <div className="py-8">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {flash.message && <FlashMessage>{flash.message}</FlashMessage>}
            <div className="flex lg:flex-row md:flex-col flex-col gap-2">
              <div className="p-6 w-full bg-white rounded-md">
                <form method="post" onSubmit={e => handleCategorySubmit(e)}>
                  <div className="grid gap-4 grid grid-cols-3 ">
                    <div>
                      <InputLabel htmlFor="name">نام دسته بندی اصلی</InputLabel>
                      <TextInput
                        id="name"
                        type="text"
                        className="mt-1 block w-full text-right"
                        value={categoryForm.data.name}
                        onChange={e =>
                          categoryForm.setData('name', e.currentTarget.value)
                        }
                        required
                        autoFocus
                      />
                      <InputError
                        className="mt-2"
                        message={categoryForm.errors.name}
                      />
                    </div>
                    <div>
                      <InputLabel htmlFor="slug">نام به انگلیسی</InputLabel>
                      <TextInput
                        id="slug"
                        type="text"
                        className="mt-1 block w-full"
                        value={categoryForm.data.slug}
                        onChange={e =>
                          categoryForm.setData('slug', e.currentTarget.value)
                        }
                        required
                        autoFocus
                      />
                      <InputError
                        className="mt-2"
                        message={categoryForm.errors.slug}
                      />
                    </div>
                    <div>
                      <PrimaryButton
                        className="block w-full mt-6 h-10 justify-center"
                        disabled={categoryForm.processing}
                      >
                        ثبت دسته بندی
                      </PrimaryButton>
                    </div>
                  </div>
                </form>
                <form
                  className="mt-8"
                  method="post"
                  onSubmit={e => handleSubCategorySubmit(e)}
                >
                  <div className="grid gap-4 grid grid-cols-2">
                    <div>
                      <InputLabel htmlFor="category">
                        نمایش همه دسته بندی ها
                      </InputLabel>
                      <select
                        onChange={e =>
                          subCategoryForm.setData(
                            'category',
                            e.currentTarget.value,
                          )
                        }
                        value={subCategoryForm.data.category}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                        style={{ height: '45px' }}
                      >
                        <option value="">دسته بندی را انتخاب کنید</option>
                        {buildOptions(categories, null)}
                      </select>
                    </div>
                    <div>
                      <InputLabel htmlFor="subcategory">
                        نام زیردسته بندی
                      </InputLabel>
                      <TextInput
                        id="subcategory"
                        type="text"
                        className="mt-1 block w-full text-right"
                        onChange={e =>
                          subCategoryForm.setData(
                            'subName',
                            e.currentTarget.value,
                          )
                        }
                        value={subCategoryForm.data.subName}
                        required
                        autoFocus
                      />
                      <InputError
                        className="mt-2"
                        message={subCategoryForm.errors.subName}
                      />
                    </div>
                    <div>
                      <InputLabel htmlFor="subcategoryEN">
                        نام زیردسته بندی به انگلیسی
                      </InputLabel>
                      <TextInput
                        id="subcategoryEN"
                        type="text"
                        className="mt-1 block w-full text-right"
                        onChange={e =>
                          subCategoryForm.setData('slug', e.currentTarget.value)
                        }
                        value={subCategoryForm.data.slug}
                        required
                      />
                      <InputError
                        className="mt-2"
                        message={subCategoryForm.errors.slug}
                      />
                    </div>
                    <div>
                      <PrimaryButton
                        className="block w-full mt-6 h-10 justify-center"
                        disabled={subCategoryForm.processing}
                      >
                        ثبت زیر دسته بندی
                      </PrimaryButton>
                    </div>
                  </div>
                </form>
              </div>
              <Aside categories={categories} />
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
