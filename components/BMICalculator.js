import { useState } from 'react';

export default function Home() {
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const weightKg = parseFloat(weight);
    // BMI = weight (kg) / height (m)^2, but height is missing here. Assuming a placeholder height (e.g., 1.7m) for simplicity.
    const heightM = 1.7; // Replace with actual height input if needed
    if (weightKg && heightM) {
      const bmiValue = weightKg / (heightM * heightM);
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 15) setCategory('Very Severely Underweight');
      else if (bmiValue < 16) setCategory('Severely Underweight');
      else if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue < 25) setCategory('Normal');
      else if (bmiValue < 30) setCategory('Overweight');
      else if (bmiValue < 35) setCategory('Obese Class 1');
      else if (bmiValue < 40) setCategory('Obese Class 2');
      else setCategory('Obese Class 3');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h1>BMI Calculator</h1>
      <div>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={{ margin: '10px 0', padding: '5px' }}
        />
      </div>
      <div>
        <select value={gender} onChange={(e) => setGender(e.target.value)} style={{ margin: '10px 0', padding: '5px' }}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <input
          type="number"
          placeholder="Age (years)"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={{ margin: '10px 0', padding: '5px' }}
        />
      </div>
      <button onClick={calculateBMI} style={{ padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none' }}>
        Calculate BMI
      </button>
      {bmi && (
        <div style={{ marginTop: '20px' }}>
          <p>Your BMI: {bmi}</p>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
}