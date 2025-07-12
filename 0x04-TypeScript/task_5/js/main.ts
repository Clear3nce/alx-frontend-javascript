// Define the MajorCredits interface
interface MajorCredits {
  credits: number;
  _brand: 'MajorCredits'; // Brand property to uniquely identify the interface
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number;
  _brand: 'MinorCredits'; // Brand property to uniquely identify the interface
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
      credits: subject1.credits + subject2.credits,
      _brand: 'MajorCredits'
  };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
      credits: subject1.credits + subject2.credits,
      _brand: 'MinorCredits'
  };
}