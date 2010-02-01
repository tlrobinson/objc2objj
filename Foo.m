@interface Foo
{
    Foo *bar;
}
@end

@implementation Foo

- (Foo*)bar
{
    return bar;
}


- (void)setBar:(Foo*)aBar
{
    bar = aBar;
}

@end
