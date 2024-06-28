import Link from 'next/link';

export default function MealsPage() {
  const meals = [
    {
      name: 'Meal 1',
      url: '/meals/meal-1',
    },
    {
      name: 'Meal 2',
      url: '/meals/meal-2',
    },
  ];

  return (
    <main>
      <h1>Meals</h1>

      <div className='meal'>
        {meals.map((meal, key) => {
          return (
            <p key={key}>
              <Link href={meal.url}>{meal.name}</Link>
            </p>
          );
        })}
      </div>
    </main>
  );
}
