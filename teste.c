#include <stdio.h>
 
int main() {
 
    double n;
    int i, voto, favor = 0;
 
    while(scanf("%lf", &n) && n != EOF) {
        for (i = 0; i < n; i++) {
            scanf("%d", &voto);
            if (voto == 1) {
                favor++;
            }
        }
        
        if (favor >= (n * 2 / 3)) {
            printf("impeachment\n");
        } else {
            printf("acusacao arquivada\n");
        }
    }
    return 0;
}