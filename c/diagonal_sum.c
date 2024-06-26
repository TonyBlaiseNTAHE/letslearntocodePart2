#include <stdio.h>

int main() {
    int i, j;
    int arr[3][3] = {{1, 2, 3}, {4, 5, 6}, {9, 8, 9}};
    int left_sum = 0, right_sum = 0, res;
    
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (i == j) {
                left_sum += arr[i][j];
            } else if (i + j == 2) { // correct condition for anti-diagonal elements
                right_sum += arr[i][j];
                printf("%d\n", arr[i][j]);
            }
        }
    }
    printf("Left Sum: %d\n", left_sum);
    printf("Right Sum: %d\n", right_sum);
    res = left_sum - right_sum;
    printf("Result: %d", res);

    return 0;
}

