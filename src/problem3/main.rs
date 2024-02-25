// Complexity: O(n)
fn sum_to_n_a(n: i32) -> i32 {
    let mut sum = 0;

    for number in 1..n+1 {
        sum += number;
    }

    return sum;
}

// Complexity: O(1)
fn sum_to_n_b(n: i32) -> i32 {
    return n * (n + 1) / 2;
}

// Complexity: O(n)
fn sum_to_n_c(n: i32) -> i32 {
    return (1..n+1).sum();
}

fn main() {
    println!("{}", sum_to_n_a(5));
    println!("{}", sum_to_n_b(5));
    println!("{}", sum_to_n_c(5));
}
