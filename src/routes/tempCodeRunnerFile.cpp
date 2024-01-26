#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> numbers(n);
    for (int i = 0; i < n; ++i) {
        cin >> numbers[i];
    }
    int M;
    cin >> M;
    sort(numbers.begin(), numbers.end());
    vector<vector<int>> dp(n + 1, vector<int>(M + 1, 0));
    for (int i = 1; i <= n; ++i) {
        for (int j = 0; j <= M; ++j) {
            dp[i][j] = dp[i - 1][j];
            if (j >= numbers[i - 1]) {
                dp[i][j] = max(dp[i][j], dp[i - 1][j - numbers[i - 1]] + numbers[i - 1]);
            }
        }
    }
    int result = M - dp[n][M];
    cout << result << endl;
    return 0;
}